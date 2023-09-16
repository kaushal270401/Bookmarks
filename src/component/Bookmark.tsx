import { useMutation, useQuery } from "react-query";
import { updateUser, fetchUser } from "../api";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import { MdStarBorder, MdStar } from "react-icons/md";


const Bookmark = (props: any) => {
  const { id, onButtonClick,isSelected } = props;

  return <button onClick={() => onButtonClick(id, isSelected)}>{isSelected ?<MdStar/>:<MdStarBorder/>}</button>;
};

export default Bookmark;
