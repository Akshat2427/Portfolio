import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Cards({img , title, description, CODE, DEMO}) {

    return (
      <Card className="mt-6 w-96 h-[100vh]">
        <CardHeader color="blue-gray" className="relative h-56 mb-10">
          <img
            src={img}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           {title}
          </Typography>
          <Typography className="pr-5">
         {description}
          </Typography>
        </CardBody>
        <CardFooter className="">
          <Button className="mx-10">
            <a
                href={CODE}
                target="_blank"
               
            
            >Code</a>
          </Button>
          <Button>
            <a
                href={DEMO}
                target="_blank"
                rel="noreferrer"
            >Demo</a>
          </Button>
        </CardFooter>
      </Card>
    );
  }