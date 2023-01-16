import { Stack } from '@mui/system'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: {
                    sx: 'auro',
                    md: '95%'
                },
                flexDirection: {
                    md: 'column'
                }
            }}
        >
            {
                categories.map(
                    (category) => (
                        <button onClick={
                            () => {
                                setSelectedCategory(category.name)
                            }
                        } className='category-btn'
                            style={{
                                background: category.name === selectedCategory && 'rgb(0, 119, 255)',
                                color: 'white'
                            }}
                            key={category.name}
                        >
                            <span style={{ color: category.name === selectedCategory ? 'white' : 'rgb(0, 119, 255)', marginRight: '15px' }} >{category.icon}</span>
                            <span style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }} >{category.name}</span>
                        </button>
                    )
                )
            }
        </Stack>
    )
}

export default Sidebar