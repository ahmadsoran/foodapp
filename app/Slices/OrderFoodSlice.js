import create from 'zustand'
const useStoreForOrderFoods = create((set) => ({
    foods: [],
    setOrderFoods: (foods) => set(() => ({
        foods,
    })),


}))

export default useStoreForOrderFoods