# Network Concepts in PDF Upload and Viewer Application

## Demo
https://drive.google.com/drive/folders/1xcoGO4_g3Mm-jwh9qKMlFCWDh6o52_7Z?usp=drive_link
## Overview
This report outlines the key network concepts demonstrated in our PDF Upload and Viewer application, which simulates file transfer over a network. The application showcases fundamental principles of computer networking, particularly focusing on client-server architecture and data transmission.

## Client-Server Model
![image](https://github.com/user-attachments/assets/b0fddd07-c5fc-40d5-bdda-e82a1e2bb9d9)

The application is built on the client-server model, a fundamental concept in network computing:
- **Client**: Represented by the user's browser, initiating requests to upload and view PDFs.
- **Server**: Our Next.js server, handling file storage and serving PDF files.

## Network Protocols (Simulated)
While not explicitly implemented, the application simulates the use of key network protocols:
- **HTTP/HTTPS**: For file upload and retrieval, operating at the Application Layer (Layer 7) of the OSI model.
- **TCP/IP**: Implied for reliable, ordered, and error-checked delivery of data packets.

## Data Encapsulation and Decapsulation
The process of uploading and downloading PDFs demonstrates the concept of data encapsulation and decapsulation:
1. **Encapsulation** (Upload): The PDF file is "encapsulated" into packets for transmission.
2. **Decapsulation** (Download): The received packets are reassembled into the original PDF file.

## Network Layers (OSI Model Reference)
The application touches on several layers of the OSI model:
- **Application Layer (Layer 7)**: User interaction with the web interface.
- **Presentation Layer (Layer 6)**: PDF formatting and encoding.
- **Session Layer (Layer 5)**: Maintaining the user's session during upload/download.
- **Transport Layer (Layer 4)**: Simulated reliable data transfer (implied TCP).
- **Network Layer (Layer 3)**: Routing of data packets (simulated in visualization).

## File Transfer Concepts
- **Chunking**: Large PDF files are typically broken down into smaller chunks for efficient transfer.
- **Buffer Management**: Handling of data buffers during file upload and download processes.

## Network Visualization
The application includes a visual representation of data transfer:
- **Packet Transmission**: Represented by the moving red dot.
- **Nodes**: Client and server depicted as network endpoints.
- **Data Flow**: Visualization of unidirectional data flow during upload/download.

## Security Considerations (Implied)
- **Data Integrity**: Ensuring uploaded files are not corrupted during transfer.
- **Access Control**: Only allowing viewing of successfully uploaded files.

## Conclusion
This application serves as a practical demonstration of fundamental networking concepts, particularly focusing on file transfer in a client-server model. It provides a visual and interactive way to understand the basics of network communication, data transmission, and the layered approach to network architecture as described by the OSI model.

