# Notes

## BACKLOG

- Handle firebase errors (registry and sign-in etc. Currently there's no handling)

## TODO

- Add note
- Load all notes into list
- edit note

-- functionality

- load notes from firestore
- update notes in firestore
- subscribe to note changes (stores and collection sub?)

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
