type CartHeaderProps = {
    image?: string;
    name?: string;
}

export default function CartHeader({ image, name }: CartHeaderProps) {
    return (
        <div className="flex bg-white md:flex-row mx-16">
            <div className="flex flex-row leading-normal w-full border-b border-gray-300 pt-10 pb-6">
                <div className="flex flex-col w-full leading-normal">
                    <div className="flex flex-row items-center">
                        {image && (
                            <div className="flex items-center h-20 w-20">
                                <img
                                    src={`../../public/images/${image}`}
                                    alt=""
                                    className="object-cover h-full w-full rounded-3xl"
                                />
                            </div>
                        )}
                        {name && (
                            <div className={`flex items-center ${image ? 'ms-6' : ''}`}>
                                <h4 className="w-full font-bold text-3xl text-gray-900 text-left">
                                    {name}
                                </h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
