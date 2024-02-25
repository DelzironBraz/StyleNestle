import { ImQuotesLeft } from "react-icons/im"

interface Props {
    name: string;
}

const ReviewCard = ({ name }: Props) => {
    return (
        <div className="flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 hover:bg-PrimaryColor transition duration-300 ease-in-out">
            <div>
                <ImQuotesLeft size={25} />
                <h1 className="text-xl font-semibold text-ExtraDarkColor pt-4">{name}</h1>
            </div>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    )
}

export default ReviewCard