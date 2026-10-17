import { MoveLeft, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-sm font-normal px-3 py-2 cursor-pointer active:scale-95 hover:underline flex gap-1 items-center"
      >
        <MoveLeft size={10} /> Home
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="text-sm font-normal px-3 py-2 cursor-pointer active:scale-95 hover:underline flex gap-1 items-center"
      >
        <MoveLeft size={10} /> Back
      </button>

      <button
        onClick={() => {
          navigate(+1);
        }}
        className="text-sm font-normal px-3 py-2 cursor-pointer active:scale-95 hover:underline flex gap-1 items-center"
      >
        <MoveRight size={10} /> Next
      </button>
    </div>
  );
};

export default Navigation;
