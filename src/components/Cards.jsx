import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "./CardComponentFile";
   
  export function Cards({img , title, description, CODE, DEMO}) {

    return (<Card className="mt-8 w-96 h-auto rounded-xl shadow-lg bg-white overflow-hidden">
       <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={img}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </CardHeader>
    

      <CardBody className="p-6 flex flex-col justify-center items-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 font-semibold text-center"
        >
          {title}
        </Typography>
        <Typography className="text-gray-600 text-center leading-relaxed">
          {description}
          + 
"            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est minus quod impedit in reiciendis excepturi eaque delectus vel pariatur atque nulla rem, enim eum numquam nostrum harum doloremque. Magni et est nemo dolores verot officiis!
"          
        </Typography>
      </CardBody>
    

      <CardFooter className="flex justify-evenly p-6 bg-gray-50 border-t">
      {/* <Button 
  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
  as="a" 
  href={CODE} 
  target="_blank" 
  rel="noreferrer"
>
  Code
</Button> */}

<Button 
  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
  as="a" 
  href={DEMO} 
  target="_blank" 
  rel="noreferrer"
>
  Go to my  Github to have its demo and Source Code
</Button>

      </CardFooter>
    </Card>
    
    );
  }