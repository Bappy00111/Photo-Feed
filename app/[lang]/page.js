import PhotoList from "@/components/PhotoList";


const Home = async () => {
 

  // console.log(process.env.BASE_API_URL);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();
  // console.log(photos);

  return (
    <div>
      <PhotoList photos={photos} />
    </div>
  );
};
export default Home;
