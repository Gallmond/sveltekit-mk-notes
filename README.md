# Notes

## TODO
- make tags editor look nice
- notification popups
- settings modal
- account modal

- PLAN FUNCTIONALITY


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