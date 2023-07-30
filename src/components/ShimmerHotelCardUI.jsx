const ShimmerHotelCardUI = () => {

    

    return(
        <>
            <h2>Shimmer UI......</h2>
            <div className="resturent-list">
            {Array(10).fill("").map((simmer,index) =>  (
                <div key={index} className="shimmerUi"></div>)
                )}
           
            </div>
        </>
    )
}

export default ShimmerHotelCardUI;