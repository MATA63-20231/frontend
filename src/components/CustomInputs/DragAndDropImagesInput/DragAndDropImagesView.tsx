import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import DragAndDropImageView from "./DragAndDropImageView";

interface IProps {
  images: File[];
  disabled: boolean;
  setImages: ((images: File[]) => void)
}

export default function DragAndDropImagesView({ images, disabled, setImages }: IProps) {
  return (
    images.length > 0 && (
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {images.map((image, index) => (
          <Grid
            item
            key={index} // eslint-disable-line react/no-array-index-key
            xs={12}
            sm={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
              <DragAndDropImageView disabled={disabled} index={index} image={image} setImages={setImages}/>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  );
}
