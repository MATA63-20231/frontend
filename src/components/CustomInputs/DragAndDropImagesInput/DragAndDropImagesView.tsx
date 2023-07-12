import ImagesCarousel from "../../ImagesCarousel.tsx";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  images: File[];
  disabled: boolean;
  setImages: (callbackFn: (previousImages: File[]) => File[]) => void;
}

export default function DragAndDropImagesView({
  images,
  disabled,
  setImages,
}: IProps) {
  // const [imagesCarousel, setImagesCarousel] = useState<IImageCarousel[]>([]);

  // useEffect(() => {
  //   const newImages = images.map((img, id) => {
  //     return { id: String(id), link: URL.createObjectURL(img) };
  //   });
  //   setImagesCarousel(newImages);
  // }, [images]);

  const deleteImage = (index: number) => {
    setImages((previousImages: File[]) => {
      const newFiles = [...previousImages];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return images.length === 0 ? null : (
    <Grid sx={{ mt: 2 }}>
      <ImagesCarousel
        images={images.map((img, id) => {
          return {
            id: String(id),
            link: URL.createObjectURL(img),
            action: (
              <CardContent sx={{ p: "0 !important" }}>
                <Tooltip title="Remover imagem">
                  <IconButton
                    disabled={disabled}
                    onClick={() => deleteImage(id)}>
                    <DeleteIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </CardContent>
            ),
          };
        })}
      />
    </Grid>

    // <Grid container spacing={2} sx={{ mt: 1 }}>
    //   {images.map((image, index) => (
    //     <Grid
    //       item
    //       key={index} // eslint-disable-line react/no-array-index-key
    //       xs={12}
    //       sm={4}
    //     >
    //       <Card>
    //         <DragAndDropImageView
    //           disabled={disabled}
    //           index={index}
    //           image={image}
    //           setImages={setImages}
    //         />
    //       </Card>
    //     </Grid>
    //   ))}
    // </Grid>
  );
}
