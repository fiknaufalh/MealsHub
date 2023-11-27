type TenantCardProps = {
    id: number,
    image: string,
    name: string,
    rating: number,
    open_hour: string,
    close_hour: string,
    lowestprice: number,
    highestprice: number,
}

export default function TenantCard({ data }: { data: TenantCardProps[] }) {
    const tenantlist = data.map(({ id, image, name, rating, open_hour, close_hour, lowestprice, highestprice }) => {
        const lowestpriceidr = lowestprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        const highestpriceidr = highestprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        return (
            <a href={`tenant/${id}`}>
                <div className="w-72 h-80 bg-white rounded-3xl shadow-xl">
                    <div className="flex items-center h-48 w-full">
                        <img className="object-cover h-full w-full rounded-3xl" src={image} alt={name} />
                    </div>
                    <div className="mt-3 px-4">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{name}</h5>
                        <div className="flex items-center">
                            <span>
                                <svg className="w-6 h-6 text-mealshub-orange" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill="mealshub-orange" d="M9.15323 5.408C10.4202 3.136 11.0532 2 12.0002 2C12.9472 2 13.5802 3.136 14.8472 5.408L15.1752 5.996C15.5352 6.642 15.7152 6.965 15.9952 7.178C16.2752 7.391 16.6252 7.47 17.3252 7.628L17.9612 7.772C20.4212 8.329 21.6502 8.607 21.9432 9.548C22.2352 10.488 21.3972 11.469 19.7202 13.43L19.2862 13.937C18.8102 14.494 18.5712 14.773 18.4642 15.117C18.3572 15.462 18.3932 15.834 18.4652 16.577L18.5312 17.254C18.7842 19.871 18.9112 21.179 18.1452 21.76C17.3792 22.342 16.2272 21.811 13.9252 20.751L13.3282 20.477C12.6742 20.175 12.3472 20.025 12.0002 20.025C11.6532 20.025 11.3262 20.175 10.6712 20.477L10.0762 20.751C7.77323 21.811 6.62123 22.341 5.85624 21.761C5.08924 21.179 5.21623 19.871 5.46923 17.254L5.53523 16.578C5.60723 15.834 5.64323 15.462 5.53523 15.118C5.42923 14.773 5.19024 14.494 4.71424 13.938L4.28024 13.43C2.60324 11.47 1.76523 10.489 2.05723 9.548C2.35024 8.607 3.58024 8.328 6.04024 7.772L6.67624 7.628C7.37524 7.47 7.72424 7.391 8.00524 7.178C8.28524 6.965 8.46523 6.642 8.82523 5.996L9.15323 5.408Z" />
                                </svg>
                            </span>
                            <span className="px-1.5 mr-1.5 font-light">{rating}</span>
                            <div className="border-r h-4 border-gray-300"></div>
                            <span className="px-1.5 ml-1.5 font-light">{open_hour} - {close_hour}</span>
                        </div>
                        <div className="pl-1.5 mt-2 flex items-center">
                            <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                                <path fill="currentColor" d="m209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5c6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3c0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5c24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7c21.5-61.6-14.6-124.8-72.5-141.7z" />
                            </svg>
                            <span className="px-3 font-light">Rp.{lowestpriceidr} - Rp.{highestpriceidr}</span>
                        </div>
                    </div>
                </div>
            </a>
        )
    });

    return tenantlist;
}