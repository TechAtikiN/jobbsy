import Image from 'next/image'

const UnderConstruction = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-indigo-600 font-semibold text-2xl my-10'>This page is under construction. Please again after sometime.</p>
      <Image
        className=''
        src='https://uploads-ssl.webflow.com/57e9a290459f142c3f9aad7e/5e1640480858b15ce140506b_Screen-Recording-construction.gif'
        alt='under-construction-gif'
        width={600}
        height={650}
      />
    </div>
  )
}

export default UnderConstruction