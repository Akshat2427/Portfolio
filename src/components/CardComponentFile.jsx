// Card.js
export function Card({ children, className }) {
    return (
      <div className={`mt-8 w-96 h-auto rounded-xl shadow-lg bg-white overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }
  
  // CardHeader.js
  export function CardHeader({ children, color, className }) {
    return (
      <div className={`relative h-56 ${className}`}>
        <div className={`w-full h-full bg-${color}-500`}>
          {children}
        </div>
      </div>
    );
  }
  
  // CardBody.js
  export function CardBody({ children, className }) {
    return (
      <div className={`p-6 flex flex-col justify-center items-center ${className}`}>
        {children}
      </div>
    );
  }
  
  // CardFooter.js
  export function CardFooter({ children, className }) {
    return (
      <div className={`flex justify-evenly p-6 bg-gray-50 border-t ${className}`}>
        {children}
      </div>
    );
  }
  
  // Typography.js
  export function Typography({ children, variant, color, className }) {
    let Tag = variant === 'h5' ? 'h5' : 'p'; // you can add more variant cases if needed
  
    return (
      <Tag className={`text-${color}-600 ${className}`}>
        {children}
      </Tag>
    );
  }
  
  // Button.js
  export function Button({ children, className }) {
    return (
      <button className={`px-6 py-2 rounded-lg transition-all duration-300 ${className}`}>
        {children}
      </button>
    );
  }
  