import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ppm from "../pictures/ppm.svg"
import plusprofem from "../pictures/plusprofem.svg"

const grayDivStyle = {
  width: '6.5rem',
  height: '6.5rem',
  background: 'gray',
  borderRadius: '50%',
  position: 'relative'
};

const plusIconStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(120%, -15%)',
  width: '1.2rem'
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  marginLeft: '3.5rem'
};

const thumb = {
  display: 'inline-flex',
  position: 'relative', // Add position relative to parent
  borderRadius: '50%',
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
  borderRadius: '50%',
};



function Dragndropbtn(props) {
  const [files, setFiles] = useState([]);
  const [showPreview, setShowPreview] = useState(true);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(prevFiles => [
        ...prevFiles,
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      ]);
      setShowPreview(true);
    }
  });

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
      
    </div>
  ));

  const removeFile = index => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    setShowPreview(newFiles.length > 0);
  };

  useEffect(() => {
    return () =>
      files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const addNewFile = () => {
    setShowPreview(false);
  };

  return (
    <section className="container flex justify-center">
      <div {...getRootProps({className: ''})}>
        <input {...getInputProps()} />
        {showPreview ? (
          <div className=" w-[6.5rem] h-[6.5rem]">
            {thumbs.length > 0 ? (
              <div style={thumb}>
                <div style={thumbInner}>
                  <img 
                    src={files[0].preview}
                    style={img}
                    onLoad={() => {
                      URL.revokeObjectURL(files[0].preview);
                    }}
                  />
                </div>
                
              </div>
            ) : (
              <div style={grayDivStyle}>
                <div>
                  <img
                  className=' w-[6.5rem] h-[6.5rem]'
                  src={plusprofem}
                  alt="plusprofem"
                  style={plusIconStyle}
                  onClick={addNewFile}
                  />
                </div>
                
              </div>
            )}
          </div>
        ) : (
          <div className=" w-[6.5rem] h-[6.5rem] bg-gray-200 rounded-full">
            
          </div>

          
        )}
              {/* <div className={'flex justify-center mt-5 px-2 py-1 bg-black text-white ' }>
                ok
              </div> */}
      </div>
      
    </section>
  );

        }

export default Dragndropbtn
