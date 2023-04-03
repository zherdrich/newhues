export default interface TrackInfo{
    album: {
        href: string,
        id: string,
        images: [
            {
                height: number,
                url: string,
                width: number
            }
        ],
        name: string,
        release_date: string,
    },
    artists: [
        {
            href: string,
            id: string,
            name: string,
        }
    ],
    duration_ms: number,
    explicit: boolean,
    href: string,
    id: string,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number
}