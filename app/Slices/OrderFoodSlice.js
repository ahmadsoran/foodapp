import create from 'zustand'
const useStoreForOrderFoods = create((set) => ({
    foods: [],
    orderFrom: {
        name: '',
        phone: '',
        address: '',
        myAddress: '',
        locations: {
            rest: {
                lat: 35.57201228306946,
                lng: 45.407009124332845
            },
            user: {
                lat: 35.58206478123707,
                lng: 45.413231849406564
            }
        }
    },
    setOrderFoods: (foods) => set(() => ({
        foods,
    })),
    setOrderFrom: (orderFrom) => set(() => ({
        orderFrom,
    })),

}))

export default useStoreForOrderFoods