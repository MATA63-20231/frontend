import { useState, useEffect } from "react";
import { Button, Grid, Tooltip } from "@mui/material";
import { sendDislike, sendLike } from "../../../services/LikesApi";
import { ICurtida } from "../../../interfaces/RecipeInterfaces";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

interface IProps {
  recipeId: string;
  initialLikes: ICurtida[];
}

export default function RecipeViewLikes({ recipeId, initialLikes }: IProps) {
  useEffect(() => {
    const likes = initialLikes.filter(({ curtida }) => curtida).length;
    const dislikes = initialLikes.filter(({ curtida }) => !curtida).length;

    setLikes(likes);
    setLikes(dislikes);
    // console.log({ likes, dislikes });
  }, []);

  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    sendLike(recipeId, setLiked);
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleDislike = () => {
    sendDislike(recipeId, setDisliked);
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };

  return (
    <Grid container direction="row" justifyContent="flex-end" gap={1}>
      <Tooltip title={liked ? "Remover curtida" : "Curtir"}>
        <Button
          onClick={handleLike}
          startIcon={<ThumbUpAltIcon />}
          size="small"
          variant={liked ? "contained" : "outlined"}>
          {liked ? `Curtiu (${likes})` : `Curtir (${likes})`}
        </Button>
      </Tooltip>
      <Tooltip title={disliked ? "Remover descurtida" : "Descurtir"}>
        <Button
          onClick={handleDislike}
          startIcon={<ThumbDownAltIcon />}
          size="small"
          variant={disliked ? "contained" : "outlined"}>
          {disliked ? `Descurtiu (${dislikes})` : `Descurtir (${dislikes})`}
        </Button>
      </Tooltip>
    </Grid>
  );
}
