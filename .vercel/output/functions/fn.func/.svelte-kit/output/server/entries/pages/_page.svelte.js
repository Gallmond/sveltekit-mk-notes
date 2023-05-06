import { c as create_ssr_component, b as add_attribute, e as escape, d as createEventDispatcher, v as validate_component, f as each, a as subscribe } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, collection, doc, setDoc, getDocs, onSnapshot, deleteDoc, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { marked } from "marked";
const firebaseConfig = {
  apiKey: "AIzaSyA3_psCtBNu52k8UzwPwpqpsb1BYjUC6bI",
  authDomain: "svelte-notes-44166.firebaseapp.com",
  projectId: "svelte-notes-44166",
  storageBucket: "svelte-notes-44166.appspot.com",
  messagingSenderId: "179800492317",
  appId: "1:179800492317:web:b00f948be30d1bc04179f4"
};
const EMULATOR_AUTH_URL = "http://localhost";
const EMULATOR_AUTH_PORT = 9099;
const EMULATOR_FIRESTORE_URL = "localhost";
const EMULATOR_FIRESTORE_PORT = 8080;
class BaseFirestoreEntity {
  uid = null;
  getFirestoreUid() {
    if (!this.uid)
      throw new Error("Entity has no uid");
    return this.uid;
  }
  setFirestoreUid(val) {
    this.uid = val;
    return this;
  }
}
class UserNote extends BaseFirestoreEntity {
  constructor(title, content = "", tags = [], pinned = false, createdAt = /* @__PURE__ */ new Date(), updatedAt = /* @__PURE__ */ new Date()) {
    super();
    this.title = title;
    this.content = content;
    this.tags = tags;
    this.pinned = pinned;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static converter = {
    toFirestore(userNote) {
      return {
        title: userNote.title,
        content: userNote.content,
        pinned: userNote.pinned,
        tags: userNote.tags,
        createdAt: Timestamp.fromDate(userNote.createdAt),
        updatedAt: Timestamp.fromDate(userNote.createdAt)
      };
    },
    fromFirestore(snapshot, options) {
      const data = snapshot.data(options);
      const { title, content, tags, pinned, createdAt, updatedAt } = data;
      const userNote = new UserNote(
        title,
        content,
        tags,
        pinned,
        createdAt.toDate(),
        updatedAt.toDate()
      );
      return userNote.setFirestoreUid(snapshot.id);
    }
  };
}
class FireBase {
  static instance = null;
  app;
  auth;
  store;
  currentUser = null;
  authStateChangedCallbacks = [];
  notesListenerUnsubscribe = null;
  localEnvironments = ["local", "development"];
  static make(newInstance = false) {
    if (newInstance || FireBase.instance === null) {
      FireBase.instance = new FireBase();
    }
    return FireBase.instance;
  }
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.store = getFirestore(this.app);
    if (this.localEnvironments.includes(process.env.NODE_ENV ?? "")) {
      connectAuthEmulator(this.auth, `${EMULATOR_AUTH_URL}:${EMULATOR_AUTH_PORT}`);
      connectFirestoreEmulator(this.store, EMULATOR_FIRESTORE_URL, EMULATOR_FIRESTORE_PORT);
    }
    onAuthStateChanged(this.auth, (user2) => {
      this.currentUser = user2;
      this.authStateChangedCallbacks.forEach((handler) => {
        handler(user2);
      });
    });
  }
  addOnAuthChangeHandler(handler) {
    this.authStateChangedCallbacks.push(handler);
  }
  notesRef(user2) {
    return collection(this.store, "users", user2.uid, "notes").withConverter(UserNote.converter);
  }
  noteRef(user2, note) {
    return doc(this.store, "users", user2.uid, "notes", note.getFirestoreUid()).withConverter(
      UserNote.converter
    );
  }
  async updateUserNote(user2, note) {
    note.updatedAt = /* @__PURE__ */ new Date();
    await setDoc(this.noteRef(user2, note), note, { merge: true });
  }
  async getUserNotes(user2) {
    const querySnapshot = await getDocs(this.notesRef(user2));
    const userNotes = [];
    querySnapshot.forEach((thisDoc) => {
      userNotes.push(thisDoc.data());
    });
    return userNotes;
  }
  clearOnUserNotesChanged() {
    this.notesListenerUnsubscribe && this.notesListenerUnsubscribe();
  }
  onUserNotesChanged(user2, callback) {
    this.notesListenerUnsubscribe = onSnapshot(this.notesRef(user2), (querySnapshot) => {
      const notes2 = [];
      querySnapshot.forEach((doc2) => {
        notes2.push(doc2.data());
      });
      callback(notes2);
    });
  }
  async deleteUser(user2) {
    await this.deleteAllUserNotes(user2);
    await deleteDoc(doc(this.store, "users", user2.uid));
    return user2.delete();
  }
  async deleteAllUserNotes(user2) {
    const batch = writeBatch(this.store);
    const notes2 = await this.getUserNotes(user2);
    for (const note of notes2) {
      batch.delete(this.noteRef(user2, note));
    }
    return batch.commit();
  }
  async deleteUserNote(user2, note) {
    return deleteDoc(this.noteRef(user2, note));
  }
  async createUserNote(user2, title, content = "", tags = []) {
    const userNote = new UserNote(title, content, tags);
    const collectionRef = collection(this.store, "users", user2.uid, "notes").withConverter(
      UserNote.converter
    );
    await addDoc(collectionRef, userNote);
    return userNote;
  }
  async signUp(email, password) {
    const userCred = await createUserWithEmailAndPassword(this.auth, email, password);
    const docRef = await doc(this.store, "users", userCred.user.uid);
    await setDoc(docRef, {
      email,
      createdAt: Timestamp.fromDate(/* @__PURE__ */ new Date())
    });
    const user2 = userCred.user;
    return user2;
  }
  async signIn(email, password) {
    const userCred = await signInWithEmailAndPassword(this.auth, email, password);
    return userCred.user ?? null;
  }
  async signOut() {
    await signOut(this.auth);
  }
}
FireBase.make();
const user = writable(null);
const notes = writable([]);
const fb = FireBase.make();
fb.addOnAuthChangeHandler(async (changedUser) => {
  user.set(changedUser);
  if (changedUser === null) {
    notes.set([]);
    fb.clearOnUserNotesChanged();
  } else {
    notes.set(await fb.getUserNotes(changedUser));
    fb.onUserNotesChanged(changedUser, (changedNotes) => {
      notes.set(changedNotes);
    });
  }
});
const zeroPad = (n) => {
  return n < 10 ? `0${n}` : `${n}`;
};
const dateString = (d = /* @__PURE__ */ new Date()) => {
  const year = d.getFullYear();
  const month = zeroPad(d.getMonth() + 1);
  const day = zeroPad(d.getDate());
  return `${year}-${month}-${day}`;
};
const timeString = (d = /* @__PURE__ */ new Date()) => {
  const hours = zeroPad(d.getHours());
  const minutes = zeroPad(d.getMinutes());
  return `${hours}:${minutes}`;
};
const dateTimeString = (d = /* @__PURE__ */ new Date()) => {
  return `${dateString(d)} ${timeString(d)}`;
};
const timeouts = {};
const debounce = (label, func, milliseconds) => {
  if (timeouts[label]) {
    clearTimeout(timeouts[label]);
  }
  timeouts[label] = setTimeout(func, milliseconds);
};
const getNoteTitle = (parser, note, generatedHtml) => {
  const maxLen = 255;
  const doc2 = parser.parseFromString(generatedHtml, "text/html");
  const h1 = doc2.querySelectorAll("h1");
  if (h1.length > 0) {
    return h1[0].innerText;
  }
  const nodes = doc2.childNodes;
  if (nodes.length > 0 && nodes[0].textContent) {
    return nodes[0].textContent.substring(0, maxLen);
  }
  return note.title;
};
const hasMasks = (test, ...masks) => {
  let valid = 0;
  for (const mask of masks) {
    if (test & mask)
      valid++;
  }
  return valid === masks.length;
};
const getUserDisplayName = (user2) => {
  if (user2 === null) {
    return "";
  }
  return user2.displayName === null ? user2.email ?? "" : `${user2.displayName} <${user2.email}>`;
};
const Badge_svelte_svelte_type_style_lang = "";
const css$b = {
  code: "button.svelte-1ey8mfo{border:0;margin-right:2px}",
  map: null
};
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `
<button class="badge text-bg-secondary svelte-1ey8mfo">${slots.default ? slots.default({}) : ``}</button>`;
});
const Card_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".card-body.svelte-lmmfgp{padding:0.5rem}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { styles = {} } = $$props;
  let styleString = "";
  const setStyleString = () => {
    const init = [];
    styleString = Object.entries(styles).reduce(
      (carry, keyVal) => {
        const [key, val] = keyVal;
        carry.push(`${key}: ${val}`);
        return carry;
      },
      init
    ).join("; ");
  };
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  $$result.css.add(css$a);
  {
    {
      setStyleString();
    }
  }
  return `<div class="card"${add_attribute("style", styleString, 0)}><div class="card-body svelte-lmmfgp">${slots.default ? slots.default({}) : `Card body`}</div>
</div>`;
});
const LightButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let type = "bdn-primary";
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  {
    {
      type = active ? "btn-primary" : "btn-secondary";
    }
  }
  return `<button type="button" class="${"btn " + escape(type, true) + " btn-sm"}" ${disabled ? "disabled" : ""}>${slots.default ? slots.default({}) : ``}</button>`;
});
const ListItem_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "p.svelte-1cuxjbz.svelte-1cuxjbz{margin-bottom:0px}.tags-container.svelte-1cuxjbz.svelte-1cuxjbz{display:flex;flex-direction:row;flex-wrap:wrap}.date-container.svelte-1cuxjbz.svelte-1cuxjbz{color:rgba(0, 0, 0, 0.5);font-size:0.75em;white-space:nowrap}.title-container.svelte-1cuxjbz.svelte-1cuxjbz{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:1.5em}.list-item.svelte-1cuxjbz.svelte-1cuxjbz{display:flex;flex-direction:column}.bit.svelte-1cuxjbz.svelte-1cuxjbz{display:flex;justify-content:space-between}.bit.svelte-1cuxjbz>p.svelte-1cuxjbz,.bit.svelte-1cuxjbz>div.svelte-1cuxjbz{width:fit-content}.bottom-bit.svelte-1cuxjbz.svelte-1cuxjbz{flex-direction:column}.list-item.svelte-1cuxjbz.svelte-1cuxjbz:nth-child(1){flex:2}.list-item.svelte-1cuxjbz.svelte-1cuxjbz:nth-child(2){flex:1}.icons.svelte-1cuxjbz.svelte-1cuxjbz{white-space:nowrap;margin-right:2px}",
  map: null
};
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  createEventDispatcher();
  createEventDispatcher();
  let { note } = $$props;
  let { selected = false } = $$props;
  const title = note.title;
  const date = dateTimeString(note.createdAt);
  const tags = note.tags;
  const pinned = note.pinned;
  let cardStyles = {};
  const setCardStyles = (selected2) => {
    cardStyles = selected2 ? { border: "2px solid black" } : {};
  };
  if ($$props.note === void 0 && $$bindings.note && note !== void 0)
    $$bindings.note(note);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$9);
  {
    setCardStyles(selected);
  }
  return `${validate_component(Card, "Card").$$render($$result, { styles: cardStyles }, {}, {
    default: () => {
      return `<div class="list-item svelte-1cuxjbz"><span style="display: none">${escape(JSON.stringify(note, null, 2))}</span>

		<div class="bit svelte-1cuxjbz"><p class="title-container svelte-1cuxjbz">${escape(title)}</p>
			<p class="date-container svelte-1cuxjbz">${escape(date)}</p></div>

		<div class="bit bottom-bit svelte-1cuxjbz"><div class="icons svelte-1cuxjbz">${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
        default: () => {
          return `Open`;
        }
      })}
				${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
        default: () => {
          return `🗑️`;
        }
      })}
				${pinned ? `${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
        default: () => {
          return `📌`;
        }
      })}` : ``}</div>
			<div class="tags-container svelte-1cuxjbz">${each(tags, (tag, i) => {
        return `<div class="tag-container">${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}</div>`;
      })}</div></div></div>`;
    }
  })}`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { input } = $$props;
  let { disabled = false } = $$props;
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `<div class="input-group mb-3"><span class="input-group-text" id="search-bar-input">🔎</span>
	<input type="text" class="form-control" placeholder="search" aria-label="search" aria-describedby="search-bar-input" ${disabled ? "disabled" : ""}${add_attribute("value", input, 0)}></div>`;
});
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  let { label = "" } = $$props;
  let { values = {} } = $$props;
  let { selected = "" } = $$props;
  let selectElement;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<div class="input-group mb-3">${label !== "" ? `<label class="input-group-text" for="select">${escape(label)}</label>` : ``}
	<select ${disabled ? "disabled" : ""} class="form-select" aria-label="Default select example" id="select-component"${add_attribute("this", selectElement, 0)}>${each(Object.entries(values), (keyVal, i) => {
    return `${keyVal[0] === selected ? `<option${add_attribute("value", keyVal[0], 0)} selected>${escape(keyVal[1])}</option>` : `<option${add_attribute("value", keyVal[0], 0)}>${escape(keyVal[1])}</option>`}`;
  })}</select></div>`;
});
const Left_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".search-create-container.svelte-1bhb4u3.svelte-1bhb4u3{display:flex;flex-direction:row;justify-content:space-between}.search-holder.svelte-1bhb4u3.svelte-1bhb4u3{margin-right:3px;flex:2}.create-holder.svelte-1bhb4u3.svelte-1bhb4u3{display:flex;justify-content:end}.list-container.svelte-1bhb4u3>div.svelte-1bhb4u3{margin-bottom:0.75em}.list-container.svelte-1bhb4u3.svelte-1bhb4u3{flex:1;overflow-y:auto}.wrapper.svelte-1bhb4u3.svelte-1bhb4u3{display:flex;flex:1;flex-direction:column;height:100%;border-right:1px solid black;padding:4px}",
  map: null
};
const Left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let { notes: notes2 = [] } = $$props;
  let { selectedNote = null } = $$props;
  createEventDispatcher();
  const selectValues = {
    title: "title",
    createdDesc: "created (desc)",
    createdAsc: "created (asc)"
  };
  let selectDefault = "title";
  let searchValue = "";
  let controlsDisabled = false;
  let allNotes = [];
  let displayNotes = [];
  user.subscribe((user2) => {
    controlsDisabled = user2 === null;
  });
  const sortDisplayNotes = (by) => {
    const pinnedNotes = [];
    const unPinnedNotes = [];
    for (const note of allNotes) {
      note.pinned ? pinnedNotes.push(note) : unPinnedNotes.push(note);
    }
    const sorter = (a, b) => {
      if (by === "title") {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      }
      if (by === "createdDesc") {
        if (a.createdAt > b.createdAt)
          return -1;
        if (a.createdAt < b.createdAt)
          return 1;
        return 0;
      }
      if (by === "createdAsc") {
        if (a.createdAt > b.createdAt)
          return 1;
        if (a.createdAt < b.createdAt)
          return -1;
        return 0;
      }
      return 0;
    };
    displayNotes = [...pinnedNotes.sort(sorter), ...unPinnedNotes.sort(sorter)];
  };
  const filterDisplayNotes = (str) => {
    const searchTerm = str.toLowerCase();
    if (searchTerm === "") {
      displayNotes = allNotes.slice();
      return;
    }
    displayNotes = allNotes.slice().filter((note) => {
      if (note.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      for (const tag of note.tags) {
        if (tag.toLowerCase().includes(searchTerm)) {
          return true;
        }
      }
      return false;
    });
  };
  if ($$props.notes === void 0 && $$bindings.notes && notes2 !== void 0)
    $$bindings.notes(notes2);
  if ($$props.selectedNote === void 0 && $$bindings.selectedNote && selectedNote !== void 0)
    $$bindings.selectedNote(selectedNote);
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        sortDisplayNotes(selectDefault);
      }
    }
    {
      {
        filterDisplayNotes(searchValue);
      }
    }
    {
      {
        allNotes = notes2;
        displayNotes = notes2;
      }
    }
    $$rendered = `<div class="wrapper svelte-1bhb4u3"><div class="search-create-container svelte-1bhb4u3"><div class="search-holder svelte-1bhb4u3">${validate_component(Search, "Search").$$render(
      $$result,
      {
        disabled: controlsDisabled,
        input: searchValue
      },
      {
        input: ($$value) => {
          searchValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		<div class="create-holder mb-3 svelte-1bhb4u3">${validate_component(LightButton, "LightButton").$$render($$result, { disabled: controlsDisabled }, {}, {
      default: () => {
        return `Create note`;
      }
    })}</div></div>

	<div>${validate_component(Select, "Select").$$render(
      $$result,
      {
        disabled: controlsDisabled,
        values: selectValues,
        label: "order by",
        selected: selectDefault
      },
      {
        selected: ($$value) => {
          selectDefault = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

	<div class="list-container svelte-1bhb4u3">${each(displayNotes, (displayNote) => {
      return `<div class="svelte-1bhb4u3">${validate_component(ListItem, "ListItem").$$render(
        $$result,
        {
          selected: selectedNote ? selectedNote.uid === displayNote.uid : false,
          note: displayNote
        },
        {},
        {}
      )}
			</div>`;
    })}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  return $$rendered;
});
const SmallInput_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "input.svelte-12izwv1{max-width:150px}",
  map: null
};
const SmallInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "button" } = $$props;
  let { value = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$7);
  return `<div class="input-group input-group-sm"><input type="text" class="form-control svelte-12izwv1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"${add_attribute("value", value, 0)}>
	${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(label)}`;
    }
  })}
</div>`;
});
const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags = [] } = $$props;
  let { onChange = () => null } = $$props;
  let newTagInput = "";
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="utility-item">${validate_component(SmallInput, "SmallInput").$$render(
      $$result,
      { label: "add", value: newTagInput },
      {
        value: ($$value) => {
          newTagInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
<div class="utility-item">${each(tags, (tag, i) => {
      return `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(tag)}`;
        }
      })}`;
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const MarkdownEditor_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".markdown-editor.svelte-14wu328{flex:1;background-color:rgb(197, 197, 197);display:flex}.text-input.svelte-14wu328{flex:1;padding:1em;border:0px;resize:none;background-color:transparent;font-family:'Courier New', Courier, monospace}",
  map: null
};
const MarkdownEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let textAreaElement;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$6);
  return `<div class="markdown-editor svelte-14wu328"><textarea class="text-input svelte-14wu328" placeholder="text here"${add_attribute("this", textAreaElement, 0)}>${value || ""}</textarea>
</div>`;
});
const MarkdownPreview_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".markdown-preview.svelte-ltjgcd{flex:1;display:flex}.markdown-output.svelte-ltjgcd{flex:1;overflow-y:scroll;padding:1em}",
  map: null
};
const MarkdownPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { html = "" } = $$props;
  if ($$props.html === void 0 && $$bindings.html && html !== void 0)
    $$bindings.html(html);
  $$result.css.add(css$5);
  return `<div class="markdown-preview svelte-ltjgcd"><div class="markdown-output svelte-ltjgcd"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></div>
</div>`;
});
const Settings_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".button.svelte-1csktg{display:flex}.buttons.svelte-1csktg{display:flex;margin:50px;align-items:center;flex-direction:column}.settings-container.svelte-1csktg{padding:4px;display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center}",
  map: null
};
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  FireBase.make();
  $$result.css.add(css$4);
  $$unsubscribe_user();
  return `<div class="settings-container svelte-1csktg">${validate_component(Card, "Card").$$render(
    $$result,
    {
      styles: { "background-color": "#e88e84" }
    },
    {},
    {
      default: () => {
        return `<div class="buttons svelte-1csktg"><div class="button mb-3 svelte-1csktg">${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
          default: () => {
            return `Delete All Notes`;
          }
        })}</div>
			<div class="button mb-3 svelte-1csktg">${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
          default: () => {
            return `Delete Account`;
          }
        })}</div></div>`;
      }
    }
  )}
</div>`;
});
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { label = "label" } = $$props;
  let { placeholder = "placeholder" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<div class="input-group mb-3"><span class="input-group-text" id="basic-text">${escape(label)}</span>
	<input type="text" class="form-control"${add_attribute("placeholder", placeholder, 0)} aria-label="email" aria-describedby="basic-text"${add_attribute("value", value, 0)}></div>`;
});
const PasswordInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { label = "label" } = $$props;
  let { placeholder = "placeholder" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<div class="input-group mb-3"><span class="input-group-text" id="basic-password">${escape(label)}</span>
	<input type="password" class="form-control"${add_attribute("placeholder", placeholder, 0)} aria-label="password" aria-describedby="basic-password"${add_attribute("value", value, 0)}></div>`;
});
const Account_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".buttons-container.svelte-1wgbmj1{display:flex;flex-direction:row;justify-content:space-around}.account-container.svelte-1wgbmj1{padding:4px;display:flex;flex:1;flex-direction:column;align-content:center;max-width:400px;align-self:center;justify-self:center;margin:0px auto}",
  map: null
};
const Account = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fb2 = FireBase.make();
  let emailInput = "";
  let passwordInput = "";
  let currentUser = fb2.currentUser;
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="account-container svelte-1wgbmj1">${currentUser === null ? `${validate_component(TextInput, "TextInput").$$render(
      $$result,
      {
        label: "email",
        placeholder: "email",
        value: emailInput
      },
      {
        value: ($$value) => {
          emailInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(PasswordInput, "PasswordInput").$$render(
      $$result,
      {
        label: "password",
        placeholder: "password",
        value: passwordInput
      },
      {
        value: ($$value) => {
          passwordInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

	<div class="row"><div class="col buttons-container svelte-1wgbmj1">
			${currentUser === null ? `${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
      default: () => {
        return `Sign in`;
      }
    })}
				${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
      default: () => {
        return `Sign up`;
      }
    })}` : `
				${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
      default: () => {
        return `Sign out`;
      }
    })}`}</div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const InstructionsPane_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".prompt.svelte-1v3i9m9.svelte-1v3i9m9{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column}.prompt.svelte-1v3i9m9>p.svelte-1v3i9m9{text-align:center}",
  map: null
};
const InstructionsPane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { SAVE_DELAY_MS: SAVE_DELAY_MS2 = 666 } = $$props;
  if ($$props.SAVE_DELAY_MS === void 0 && $$bindings.SAVE_DELAY_MS && SAVE_DELAY_MS2 !== void 0)
    $$bindings.SAVE_DELAY_MS(SAVE_DELAY_MS2);
  $$result.css.add(css$2);
  return `<div class="prompt svelte-1v3i9m9"><p class="svelte-1v3i9m9">Select a note to edit or preview</p>
	<p class="svelte-1v3i9m9">Notes are saved automatically after ${escape(SAVE_DELAY_MS2 / 1e3)} seconds of inactivity</p>
	<p class="svelte-1v3i9m9">Use the search bar to search by note title or tag</p>
	<p class="svelte-1v3i9m9">Use tags to group together notes</p>
	<h2>Hotkeys</h2>
	<table class="table"><thead><tr><th>Key</th><th>Action</th></tr></thead>
		<tbody><tr><td><kbd>Ctrl</kbd> + <kbd>e</kbd></td><td>Toggle edit pane</td></tr>
			<tr><td><kbd>Ctrl</kbd> + <kbd>r</kbd></td><td>Toggle read pane</td></tr>
			<tr><td><kbd>Ctrl</kbd> + <kbd>c</kbd></td><td>Create new note</td></tr></tbody></table>
</div>`;
});
const Right_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-euz89m{display:flex;flex:1;flex-direction:column}.top-bar.svelte-euz89m{padding:4px;height:fit-content;border-bottom:1px solid black;display:flex;flex-direction:column}.buttons-bar.svelte-euz89m{display:flex;flex-direction:row;justify-content:space-between}.content-container.svelte-euz89m{flex:1;min-height:1px;display:flex;flex-direction:row}.utility-bar.svelte-euz89m{display:flex;flex-direction:row;justify-content:left}",
  map: null
};
const SAVE_DELAY_MS = 666;
const Right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  createEventDispatcher();
  const dispatchTagsChanged = createEventDispatcher();
  const dispatchContentChanged = createEventDispatcher();
  createEventDispatcher();
  let { note = null } = $$props;
  let inputText = "";
  let generatedMarkdown = "";
  let tags = [];
  let notePinned = note?.pinned ?? false;
  notes.subscribe((updatedNotes) => {
    for (const updatedNote of updatedNotes) {
      if (updatedNote.uid === note?.uid) {
        notePinned = updatedNote.pinned;
      }
    }
  });
  const getParser = () => {
    {
      throw new Error("DOMParser not initialised");
    }
  };
  const setInitialNote = (note2) => {
    inputText = note2?.content ?? "";
    generatedMarkdown = marked(inputText);
    tags = note2?.tags ?? [];
    if (!(displayState & 8) && !(displayState & 4)) {
      displayState = 8 + 4;
    }
    notePinned = note2?.pinned ?? false;
  };
  const initiateSave = () => {
    debounce(
      "save",
      () => {
        if (note === null)
          return;
        note.content = inputText;
        note.title = getNoteTitle(getParser(), note, generatedMarkdown);
        dispatchContentChanged("noteContentChanged", { note });
      },
      SAVE_DELAY_MS
    );
  };
  var Display = /* @__PURE__ */ ((Display2) => {
    Display2[Display2["ACCOUNT"] = 1] = "ACCOUNT";
    Display2[Display2["SETTINGS"] = 2] = "SETTINGS";
    Display2[Display2["EDITOR"] = 4] = "EDITOR";
    Display2[Display2["PREVIEW"] = 8] = "PREVIEW";
    return Display2;
  })(Display || {});
  let displayState = 1;
  let topButtonsDisabled = false;
  const setTopButtonsDisabled = () => {
    topButtonsDisabled = note === null || $user === null;
  };
  let displayName = "";
  user.subscribe((user2) => {
    console.log("Right.svelte user.subscribe", { user: user2 });
    displayName = getUserDisplayName(user2);
    displayState = user2 === null ? 1 : 4 + 8;
    setTopButtonsDisabled();
  });
  let tagsActive = false;
  const tagsChanged = (tags2) => {
    if (note === null)
      return;
    note.tags = tags2;
    dispatchTagsChanged("noteTagsChanged", { note });
  };
  if ($$props.note === void 0 && $$bindings.note && note !== void 0)
    $$bindings.note(note);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        setInitialNote(note);
        setTopButtonsDisabled();
      }
    }
    {
      {
        generatedMarkdown = marked(inputText);
        initiateSave();
      }
    }
    {
      {
        if (topButtonsDisabled === true && tagsActive === true) {
          tagsActive = false;
        }
      }
    }
    $$rendered = `<div class="wrapper svelte-euz89m"><div class="top-bar svelte-euz89m"><div class="buttons-bar svelte-euz89m"><div class="buttons-container">${validate_component(LightButton, "LightButton").$$render(
      $$result,
      {
        disabled: topButtonsDisabled,
        active: hasMasks(displayState, Display.EDITOR)
      },
      {},
      {
        default: () => {
          return `✏️`;
        }
      }
    )}
				${validate_component(LightButton, "LightButton").$$render(
      $$result,
      {
        disabled: topButtonsDisabled,
        active: hasMasks(displayState, Display.PREVIEW)
      },
      {},
      {
        default: () => {
          return `👁️`;
        }
      }
    )}
				${validate_component(LightButton, "LightButton").$$render(
      $$result,
      {
        disabled: topButtonsDisabled,
        active: tagsActive && !topButtonsDisabled
      },
      {},
      {
        default: () => {
          return `🏷️`;
        }
      }
    )}
				${validate_component(LightButton, "LightButton").$$render(
      $$result,
      {
        disabled: topButtonsDisabled,
        active: notePinned
      },
      {},
      {
        default: () => {
          return `📌`;
        }
      }
    )}</div>

			<div class="buttons-container"><small>${escape(displayName)}</small>
				${validate_component(LightButton, "LightButton").$$render(
      $$result,
      {
        active: displayState === Display.SETTINGS,
        disabled: $user === null
      },
      {},
      {
        default: () => {
          return `⚙️`;
        }
      }
    )}
				${validate_component(LightButton, "LightButton").$$render($$result, { active: displayState === Display.ACCOUNT }, {}, {
      default: () => {
        return `👤`;
      }
    })}</div></div>

		<div class="utility-bar svelte-euz89m">${tagsActive ? `<div class="tags-container mt-2">${validate_component(Tags, "Tags").$$render($$result, { tags, onChange: tagsChanged }, {}, {})}</div>` : ``}</div></div>

	<div class="content-container svelte-euz89m">${displayState === 0 ? `${validate_component(InstructionsPane, "InstructionsPane").$$render($$result, { SAVE_DELAY_MS }, {}, {})}` : ``}

		${displayState === Display.ACCOUNT ? `${validate_component(Account, "Account").$$render($$result, {}, {}, {})}` : ``}

		${displayState === Display.SETTINGS ? `${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}` : ``}

		
		${note !== null ? `${displayState & Display.EDITOR ? `${validate_component(MarkdownEditor, "MarkdownEditor").$$render(
      $$result,
      { value: inputText },
      {
        value: ($$value) => {
          inputText = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

			${displayState & Display.PREVIEW ? `${validate_component(MarkdownPreview, "MarkdownPreview").$$render($$result, { html: generatedMarkdown }, {}, {})}` : ``}` : ``}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".left-container.svelte-10i16dg{min-width:350px;flex:2}.right-container.svelte-10i16dg{flex:8;display:flex}.wrapper.svelte-10i16dg{display:flex;flex:1;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  FireBase.make();
  let selectedNote = null;
  let allNotes = [];
  notes.subscribe((updatedNotes) => {
    allNotes = updatedNotes;
  });
  $$result.css.add(css);
  $$unsubscribe_user();
  return `<div class="wrapper svelte-10i16dg"><div class="left-container svelte-10i16dg">${validate_component(Left, "Left").$$render($$result, { notes: allNotes, selectedNote }, {}, {})}</div>
	<div class="right-container svelte-10i16dg">${validate_component(Right, "Right").$$render($$result, { note: selectedNote }, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
