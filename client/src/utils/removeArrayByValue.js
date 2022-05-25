export const removeArrayByValue = (array, value) => {
    const index = array.indexOf(value);
    if (index > -1)
        return [array.slice(0, index), array.slice(index + 1)]
    return array
}
