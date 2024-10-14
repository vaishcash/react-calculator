export const Calculator = () => {
  return (
    <div className="Container w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#0a2910] to-[#5d6800] ">
      <div className="calculator p-5 rounded-xl bg-black border-2 border-white text-white">
        <form action="">
          <div className="display flex justify-end mb-2">
            <input
              className="w-full font-medium rounded-xl px-2 py-2 zz text-black"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            
            <input type="button" value={"AC"} />
            <input type="button" value={"DE"} />
            <input type="button" value={"."} />
            <input type="button" value={"/"} />
          </div>
          <div>
            <input type="button" value={"7"} />
            <input type="button" value={"8"} />
            <input type="button" value={"9"} />
            <input type="button" value={"*"} />
          </div>
          <div>
            <input type="button" value={"4"} />
            <input type="button" value={"5"} />
            <input type="button" value={"6"} />
            <input type="button" value={"+"} />
          </div>
          <div>
            <input type="button" value={"3"} />
            <input type="button" value={"2"} />
            <input type="button" value={"1"} />
            <input type="button" value={"-"} />
          </div>
          <div>
            <input type="button" value={"00"} />
            <input type="button" value={"0"} />
            <input type="button" value={"="} className="equal" />
          </div>
        </form>
      </div>
    </div>
  );
};
