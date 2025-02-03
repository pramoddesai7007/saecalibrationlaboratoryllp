import Cards from "./Cards"

const Matrix = () => {

  // const images = ['public/image1.webp', 'public/image2.webp', 'public/image3.webp'];

  const imag = ["public/image.webp", "public/image2.webp", "public/image3.webp", "public/image.webp", "public/image2.webp"]
  

  return (
    <>

      <div className="w-[100%] flex flex-wrap justify-center gap-2 p-1 h-[800px] bg-[#F2F2F2] shadow-xl ">
        <Cards imag={imag} />
        <Cards imag={imag} />
        <Cards imag={imag} />
        <Cards imag={imag} />
        <Cards imag={imag} />

        <Cards imag={imag} />
        <Cards imag={imag} />
        <Cards imag={imag} />



      </div>

      <div className=" text-[40px]    mt-4 flex justify-center items-center">
        We <span className="text-[#1A4B6C] ml-1 mr-1 font-semibold"> Send you The Price </span> Immediatly
      </div>
      <div className="flex justify-center mt-4 mb-4 ">
        <button className="bg-[#1A4B6C] rounded-lg px-10 py-3 text-center text-[30px] text-white hover:bg-white hover:text-[#1A4B6C]  hover:outline ">Get Instant Quote</button>
      </div>

    </>
  )
}
export default Matrix