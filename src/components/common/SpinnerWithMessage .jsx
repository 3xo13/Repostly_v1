const SpinnerWithMessage = ({title}) => {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-main  border-b-transparent rounded-full animate-spin"></div>
        
        {/* Message */}
        <p className="text-lg font-medium text-gray-700">{title}</p>
      </div>
    );
  };
  
  export default SpinnerWithMessage;
  