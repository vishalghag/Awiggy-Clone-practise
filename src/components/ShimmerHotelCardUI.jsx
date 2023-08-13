const ShimmerHotelCardUI = () => {

    

    return(
        <>
            <h2>Shimmer UI......</h2>
            <div className="flex flex-wrap">
            {Array(10).fill("").map((simmer,index) =>  (
                <div key={index} className='w-56 p-2 m-2 shadow-lg bg-gray-100 w-64 h-64'></div>)
                )}
           
            </div>
        </>
    )
}

export default ShimmerHotelCardUI;