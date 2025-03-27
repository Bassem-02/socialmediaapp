import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Badge, Image, Dropdown, Modal, ListGroup } from 'react-bootstrap';
import { 
  FiSearch, 
  FiMoreVertical, 
  FiPaperclip, 
  FiMic, 
  FiSmile, 
  FiSend, 
  FiCheck, 
  FiCheckCircle,
  FiTrash2,
  FiArchive,
  FiCircle
} from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatApp = () => {
  // State management
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [contacts, setContacts] = useState([]);
  const [activeContact, setActiveContact] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const messagesEndRef = useRef();

  // Mock data initialization with only male contacts
  useEffect(() => {
    const mockContacts = [
      { id: 1, name: 'Alex Johnson', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', status: 'online', lastSeen: '', unread: 2 },
      { id: 2, name: 'Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', status: 'offline', lastSeen: '2h ago', unread: 0 },
      { id: 3, name: 'David Wilson', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', status: 'online', lastSeen: '', unread: 1 },
      { id: 4, name: 'James Brown', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', status: 'offline', lastSeen: '5h ago', unread: 0 },
      { id: 5, name: 'Robert Taylor', avatar: 'https://randomuser.me/api/portraits/men/5.jpg', status: 'online', lastSeen: '', unread: 3 },
    ];

    const mockMessages = [
      { id: 1, senderId: 1, text: 'Hey, are we still meeting tomorrow?', timestamp: '10:30 AM', status: 'read', type: 'incoming' },
      { id: 2, senderId: 'me', text: 'Yes, 2pm at the coffee shop', timestamp: '10:32 AM', status: 'read', type: 'outgoing' },
      { id: 3, senderId: 1, text: 'Perfect! I\'ll bring the project files', timestamp: '10:33 AM', status: 'delivered', type: 'incoming' },
    ];

    setContacts(mockContacts);
    setMessages(mockMessages);
    setActiveContact(mockContacts[0]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() && activeContact) {
      const newMsg = {
        id: Date.now(),
        senderId: 'me',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent',
        type: 'outgoing'
      };
      
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const deleteAllMessages = () => {
    setMessages([]);
    setShowDeleteModal(false);
  };

  const toggleOnlineStatus = () => {
    setOnlineStatus(!onlineStatus);
    // In real app: Update status via API/WebSocket
  };

  return (
    <Container fluid className="chat-app-container">
      {/* Delete All Messages Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete All Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will delete all messages in this conversation for both sides.</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteAllMessages}>
            Delete All
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="g-0 h-100">
        {/* Contacts Sidebar */}
        <Col md={4} className="contacts-sidebar">
          <div className="sidebar-header p-3">
            <div className="d-flex align-items-center">
              <div className="position-relative me-2">
                <Image 
                  src="https://randomuser.me/api/portraits/men/6.jpg" 
                  roundedCircle 
                  width={40} 
                  height={40} 
                />
                <div 
                  className={`position-absolute bottom-0 end-0 rounded-circle border border-2 ${onlineStatus ? 'bg-success' : 'bg-secondary'}`}
                  style={{ width: '12px', height: '12px' }}
                ></div>
              </div>
              <div>
                <h6 className="mb-0 fw-bold">Your Profile</h6>
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="p-0 text-muted small">
                    {onlineStatus ? 'Online' : 'Offline'}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={toggleOnlineStatus}>
                      Set to {onlineStatus ? 'Offline' : 'Online'}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <Button variant="link" className="p-0">
              <FiMoreVertical size={20} />
            </Button>
          </div>

          <div className="search-bar p-3">
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <FiSearch />
              </span>
              <Form.Control
                type="text"
                placeholder="Search messages"
                className="border-0 bg-light"
              />
            </div>
          </div>

          <ListGroup variant="flush" className="contacts-list">
            {contacts.map(contact => (
              <ListGroup.Item 
                key={contact.id}
                action 
                active={activeContact?.id === contact.id}
                onClick={() => setActiveContact(contact)}
                className="contact-item"
              >
                <div className="d-flex align-items-center">
                  <div className="position-relative me-3">
                    <Image src={contact.avatar} roundedCircle width={48} height={48} />
                    {contact.status === 'online' && (
                      <div 
                        className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-2 border-white"
                        style={{ width: '12px', height: '12px' }}
                      ></div>
                    )}
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0 fw-bold">{contact.name}</h6>
                      <small className="text-muted">{contact.lastSeen}</small>
                    </div>
                    <p className="mb-0 text-muted text-truncate">Last message preview...</p>
                  </div>
                  {contact.unread > 0 && (
                    <Badge pill bg="primary" className="ms-2">
                      {contact.unread}
                    </Badge>
                  )}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Chat Area */}
        <Col md={8} className="chat-area">
          {activeContact ? (
            <>
              <div className="chat-header p-3">
                <div className="d-flex align-items-center">
                  <div className="position-relative me-3">
                    <Image src={activeContact.avatar} roundedCircle width={40} height={40} />
                    {activeContact.status === 'online' && (
                      <div 
                        className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-2 border-white"
                        style={{ width: '12px', height: '12px' }}
                      ></div>
                    )}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{activeContact.name}</h6>
                    <small className="text-muted">
                      {activeContact.status === 'online' ? 'Active now' : `Last seen ${activeContact.lastSeen}`}
                    </small>
                  </div>
                  <Dropdown className="ms-auto">
                    <Dropdown.Toggle variant="link" className="text-dark p-0">
                      <FiMoreVertical size={20} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setShowDeleteModal(true)}>
                        <FiTrash2 className="me-2" /> Delete Conversation
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="messages-container">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`message-bubble ${message.type === 'incoming' ? 'incoming' : 'outgoing'}`}
                  >
                    <div className="message-content">
                      <p className="mb-1">{message.text}</p>
                      <div className="message-footer">
                        <small className="timestamp">{message.timestamp}</small>
                        {message.type === 'outgoing' && (
                          <span className="status-icon">
                            {message.status === 'read' ? (
                              <FiCheckCircle size={14} className="text-primary" />
                            ) : (
                              <FiCheck size={14} className="text-muted" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="message-input-container">
                <Button variant="link" className="input-icon">
                  <FiPaperclip size={20} />
                </Button>
                <Button variant="link" className="input-icon">
                  <FiSmile size={20} />
                </Button>
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Type a message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  className="message-input"
                />
                <Button 
                  variant="primary" 
                  className="send-button"
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                >
                  <FiSend size={18} />
                </Button>
              </div>
            </>
          ) : (
            <div className="no-chat-selected">
              <div className="empty-state">
                <h4>Select a conversation</h4>
                <p className="text-muted">Choose from your contacts to start chatting</p>
              </div>
            </div>
          )}
        </Col>
      </Row>

      {/* Custom CSS */}
      <style jsx>{`
        .chat-app-container {
          height: 100vh;
          background-color: #f8f9fa;
        }
        .contacts-sidebar {
          background-color: white;
          border-right: 1px solid #e9ecef;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e9ecef;
        }
        .contacts-list {
          flex-grow: 1;
          overflow-y: auto;
        }
        .contact-item {
          border-radius: 0;
          border-left: 0;
          border-right: 0;
          padding: 12px 16px;
        }
        .chat-area {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: #f0f2f5;
        }
        .chat-header {
          background-color: white;
          border-bottom: 1px solid #e9ecef;
        }
        .messages-container {
          flex-grow: 1;
          padding: 16px;
          overflow-y: auto;
          background-color: #e5ddd5;
          background-image: url('https://web.whatsapp.com/img/bg-chat-tile-light_a4be512e7195b6b733d9110b408f075d.png');
          background-repeat: repeat;
        }
        .message-bubble {
          max-width: 70%;
          margin-bottom: 8px;
          position: relative;
          padding: 8px 12px;
          border-radius: 18px;
        }
        .incoming {
          background-color: white;
          align-self: flex-start;
        }
        .outgoing {
          background-color: #d9fdd3;
          align-self: flex-end;
        }
        .message-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: 4px;
        }
        .timestamp {
          font-size: 0.75rem;
          color: #667781;
        }
        .status-icon {
          margin-left: 4px;
        }
        .message-input-container {
          background-color: white;
          padding: 8px 16px;
          display: flex;
          align-items: center;
        }
        .input-icon {
          color: #54656f;
        }
        .message-input {
          flex-grow: 1;
          margin: 0 8px;
          border-radius: 20px;
          resize: none;
          border: none;
          background-color: #f0f2f5;
          padding: 9px 12px;
        }
        .send-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .no-chat-selected {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .empty-state {
          text-align: center;
        }
      `}</style>
    </Container>
  );
};

export default ChatApp;