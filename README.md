# Notes

## TODO

- notification popups

-- functionality

- user login / logout
- create note, persist to firestore
- load notes from firestore
- update notes in firestore

## Data

collection 'users' contains documents like

{
username: some-name
uid: 1234
profileImageUrl: https://domain.com/image.png
notes: <string, Note>
pinnedNotes: string[] (note ids)
}

notes, archivedNotes, and deletedNotes are collections of Notes, where a Note
document looks like:

{
id: ABCD1234
content: 'markdown string'
tags: string[]
createdAt: datetime
deletedAt: datetime
archivedAt: datetime
state: 'active', 'archived', 'deleted'
}
