import {useRouter} from "next/router";

function Doc(){
    const router=useRouter()
    const{params =[]}=router.query
    console.log("Params",params)

    if(params.length ===2){
        return (
            <h1>Viewing the docs feature {params[0]} & concept features {params[1]}</h1>
        )
    }else if(params.length ===1){
        return (
            <h1>Viewing the docs feature {params[0]}</h1>
        )
    }
    return <h1>Docs Page</h1>
}

export default Doc