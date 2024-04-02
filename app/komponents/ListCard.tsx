export default function ListCard({ title, description, link }: any) {
    return(
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">{title}</div>
                    <p className="mt-2 text-gray-500">{description}</p>
                    <a href={link} className="text-blue-500 underline">Mehr erfahren</a>
                </div>
            </div>
        </div>
    )
}
