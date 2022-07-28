import create from 'zustand'
const useStoreForOrderFoods = create((set) => ({
    foods: [],
    orderFrom: {
        name: '',
        phone: '',
        address: '',
        myAddress: '',
    },
    setOrderFoods: (foods) => set(() => ({
        foods,
    })),
    setOrderFrom: (orderFrom) => set(() => ({
        orderFrom,
    })),

}))

export default useStoreForOrderFoods