import useSwr from 'swr'

const fetcher = async () => {
    const response = await fetch('http://localhost:3001/dashboard')
    const data = await response.json()
    return data
}

function DashboardSWR() {
    const {data,error}=useSwr('dashboard',fetcher)

    if(error) return 'An error has occurred'
    if(!data) return 'Loading..'

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts- {data.posts}</h2>
            <h2>Likes- {data.likes}</h2>
            <h2>Followers- {data.followers}</h2>
            <h2>Following- {data.following}</h2>
        </div>
    )
}

export default DashboardSWR