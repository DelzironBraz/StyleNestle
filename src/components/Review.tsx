import ReviewCard from "./ReviewCard"

const Review = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5">
            <h1 className="font-semibold text-ExtraDarkColor text-4xl text-center lg:mt-14 mt-24">Feedback Corner</h1>

            <div id="review" className="flex flex-col items-center lg:flex-row gap-5 justify-center py-4 my-8">
                <ReviewCard name={"Emilly Davis"} />
                <ReviewCard name={"John Smith"} />
                <ReviewCard name={"John Carter"} />
            </div>
        </div>
    )
}

export default Review