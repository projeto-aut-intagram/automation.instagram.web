import Head from 'next/head';
import { Header, Divisor, Container, Content, DropContainer, UploadMessage } from '../../styles';

import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

export default function Home() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop, accept: {
        'image/jpeg': [],
        'image/png': [],
        'video/mp4': []
      }
    })

  return (
    <>
      <Head>
        <title>Inicio | Automaticion Instagram Posts</title>
      </Head>

      <Header />
      <Container>
        <Content>
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >

            <input {...getInputProps()} />
            {
              !isDragActive ?
                <UploadMessage type="default" >Arraste arquivos aqui ou clique para selecionar ...</UploadMessage> :

                isDragReject ?
                  <UploadMessage type="error">Arquivos não suportados</UploadMessage> :

                  isDragActive &&
                  <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
            }

          </DropContainer>
        </Content>
      </Container>
    </>
  )
}
