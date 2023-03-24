class Faker{

    static title(): string
    {
        const titles = [
            "Bob's birthday ideas",
            "Presents for mam",
            "Nice cookie recipe",
            "TODO",
            "Meeting notes"
        ]

        return titles[Math.floor((Math.random()*titles.length))]
    }

    static tags(max = 3): string[]
    {
        function getRandomInt(min: number, max: number): number {
            min = Math.ceil(min);
            max = Math.floor(max);

            const range = max - min + 1;

            return Math.floor(Math.random() * range) + min;
        }

        const tags = []
        for(let i = 0, l = getRandomInt(1, max); i < l; i++){
            tags.push( Faker.tag() )
        }

        return tags
    }

    static tag(): string
    {
        const tags = [
            'TODO', 
            'Recipe',
            'Review',
            'Meeting'
        ]

        return tags[Math.floor((Math.random()*tags.length))]
    }

    static date(): string
    {

        const days = Math.floor((Math.random()*10))

        const d = new Date()
        d.setDate( d.getDate() + days )

        const formatDateTimeString = (d: Date) => {
            const yyyymmdd = d.toISOString().split('T')[0]
        
            const h = d.getHours() < 10
                ? `0${d.getHours()}`
                : d.getHours()
        
            const m = d.getMinutes() < 10
                ? `0${d.getMinutes()}`
                : d.getMinutes()
        
            return `${yyyymmdd} ${h}:${m}`
        }

        return formatDateTimeString(d)
    }

}

export default Faker