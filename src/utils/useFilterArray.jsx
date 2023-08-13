

const useFilterArray = (filterArray,searchTxt) => {

    let filterArrayData = filterArray.filter((ele) => ele.info.name.toLowerCase().trim().includes(searchTxt.toLowerCase()));

    return filterArrayData
}

export default useFilterArray;