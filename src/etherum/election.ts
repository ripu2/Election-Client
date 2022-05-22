import { ethers } from 'ethers'
import provider from './ethers'
import Election from "../etherum/build/Election.json"

const instance = new ethers.Contract(
    // process.env.NEXT_PUBLIC_ADDRESS as string,
    process.env.NEXT_PUBLIC_DEPLOYMENTADDRESS as string,
    JSON.parse(Election.interface),
    provider?.getSigner()
)

export default instance as any