import { useAppSelector } from "@store/hooks"
import { Heading } from "@components/common"
const Account = () => {
  const accountInfo = useAppSelector((state)=>state.auth.user)
  return (
    <>
      <Heading title="Account Info" />
      <ul>
        <li>First name:{accountInfo?.firstName} </li>
        <li>Last name:{accountInfo?.lastName}</li>
        <li>Emial:{accountInfo?.email}</li>
      </ul>
    </>
  )
}

export default Account