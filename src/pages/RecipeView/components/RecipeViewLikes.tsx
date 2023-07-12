import { useState, useContext, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Tooltip } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import {
  deleteLike,
  sendDislike,
  sendLike,
} from "../../../services/LikesApi.tsx";
import Loading from "../../../components/Loading.tsx";
import AuthContext from "../../../contexts/AuthContext.tsx";

interface IProps {
  recipeId: string;
  totalLikes: number;
  totalDislikes: number;
  myLike: boolean | undefined;
  setShouldReload: Dispatch<SetStateAction<boolean>>;
}

export default function RecipeViewLikes({
  recipeId,
  totalLikes,
  totalDislikes,
  myLike,
  setShouldReload,
}: IProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { signedIn } = useContext(AuthContext);

  const handleLike = () => {
    if (!signedIn) {
      navigate("/login");
    } else {
      if (myLike === true) {
        deleteLike(recipeId, setLoading, setShouldReload);
      } else {
        sendLike(recipeId, setLoading, setShouldReload);
      }
    }
  };

  const handleDislike = () => {
    if (!signedIn) {
      navigate("/login");
    } else {
      if (myLike === false) {
        deleteLike(recipeId, setLoading, setShouldReload);
      } else {
        sendDislike(recipeId, setLoading, setShouldReload);
      }
    }
  };

  return (
    <Grid container direction="row" justifyContent="flex-end" gap={1}>
      <Tooltip title={myLike === true ? "Remover" : "Curtir"}>
        <Button
          onClick={handleLike}
          disabled={loading}
          startIcon={<ThumbUpAltIcon />}
          size="small"
          variant={myLike === true ? "contained" : "outlined"}>
          {loading ? (
            <Loading />
          ) : myLike === true ? (
            `Curtiu (${totalLikes})`
          ) : (
            `Curtir (${totalLikes})`
          )}
        </Button>
      </Tooltip>
      <Tooltip title={myLike === false ? "Remover" : "Descurtir"}>
        <Button
          onClick={handleDislike}
          disabled={loading}
          startIcon={<ThumbDownAltIcon />}
          size="small"
          variant={myLike === false ? "contained" : "outlined"}>
          {loading ? (
            <Loading />
          ) : myLike === false ? (
            `Descurtiu (${totalDislikes})`
          ) : (
            `Descurtir (${totalDislikes})`
          )}
        </Button>
      </Tooltip>
    </Grid>
  );
}
