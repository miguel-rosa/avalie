import React, {FC} from "react";

type BannerProps = {
  title: string;
  description: string;
  background?: string;
};

const Banner:FC<BannerProps> = ({
  title,
  description,
  background = "linear-gradient(90deg, rgba(0,0,0,0.6) , rgba(0,0,0,0.4) ), url('https://images.unsplash.com/photo-1562564055-71e051d33c19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')"
}) => {
  return (
    <div 
      style={{background: background}}
      className="bg-center cover pa4 br4 tc flex flex-column justify-center items-center"
    >
      <h1 className="white f2-l f3 f2-ns w-100">
        {title}
      </h1>
      <p className="w-60-l white f4 w-100">
        {description}
      </p>
    </div>
  )
}

export default Banner;