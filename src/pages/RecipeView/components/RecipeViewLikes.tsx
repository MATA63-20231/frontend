import {
  useState, useContext, Dispatch, SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import {
  deleteLike,
  sendDislike,
  sendLike,
} from "../../../services/LikesApi.tsx";
import AuthContext from "../../../contexts/AuthContext.tsx";
import LoadingButton from "../../../components/LoadingButton.tsx";

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
    } else if (myLike === true) {
      deleteLike(recipeId, setLoading, setShouldReload);
    } else {
      sendLike(recipeId, setLoading, setShouldReload);
    }
  };

  const handleDislike = () => {
    if (!signedIn) {
      navigate("/login");
    } else if (myLike === false) {
      deleteLike(recipeId, setLoading, setShouldReload);
    } else {
      sendDislike(recipeId, setLoading, setShouldReload);
    }
  };

  return (
    <Grid container direction="row" justifyContent="center" gap={1}>
      <Grid item>
        <LoadingButton
          loading={loading}
          onClick={handleLike}
          startIcon={<ThumbUpAltIcon />}
          size="small"
          variant={myLike === true ? "contained" : "outlined"}
          tooltipTitle={myLike === true ? "Remover" : "Curtir"}
        >
          {myLike === true
            ? `Curtiu (${totalLikes})`
            : `Curtir (${totalLikes})`}
        </LoadingButton>
      </Grid>
      <Grid item>
        <LoadingButton
          loading={loading}
          onClick={handleDislike}
          startIcon={<ThumbDownAltIcon />}
          size="small"
          variant={myLike === false ? "contained" : "outlined"}
          tooltipTitle={myLike === false ? "Remover" : "Curtir"}
        >
          {myLike === false
            ? `Descurtiu (${totalDislikes})`
            : `Descurtir (${totalDislikes})`}
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
