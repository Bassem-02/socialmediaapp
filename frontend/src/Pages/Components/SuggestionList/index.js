// pages/FriendPage.js
import React, { useState } from 'react';
import { Container, Card, ListGroup, Button, Badge, Image } from 'react-bootstrap';
import { PersonPlus, Check2 } from 'react-bootstrap-icons';

// Sample profile images (replace with your actual image paths or URLs)
const profileImages = {
  1: 'https://randomuser.me/api/portraits/men/32.jpg',
  2: 'https://randomuser.me/api/portraits/women/44.jpg',
  3: 'https://randomuser.me/api/portraits/men/22.jpg',
  4: 'https://randomuser.me/api/portraits/women/68.jpg',
  5: 'https://randomuser.me/api/portraits/men/75.jpg'
};

const FriendPage = () => {
  const [suggestions, setSuggestions] = useState([
    { id: 1, name: 'Alex Johnson', mutualFriends: 12, online: true, isAdded: false },
    { id: 2, name: 'Sarah Miller', mutualFriends: 8, online: false, isAdded: false },
    { id: 3, name: 'David Wilson', mutualFriends: 5, online: true, isAdded: false },
    { id: 4, name: 'Emma Davis', mutualFriends: 3, online: false, isAdded: false },
    { id: 5, name: 'James Brown', mutualFriends: 7, online: true, isAdded: false },
  ]);

  const handleAddFriend = (suggestionId) => {
    setSuggestions(suggestions.map(suggestion => 
      suggestion.id === suggestionId ? { ...suggestion, isAdded: true } : suggestion
    ));
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-white">
          <h5 className="mb-0">People You May Know</h5>
        </Card.Header>
        <ListGroup variant="flush">
          {suggestions.map((suggestion) => (
            <ListGroup.Item key={suggestion.id} className="py-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="position-relative me-3">
                    {profileImages[suggestion.id] ? (
                      <>
                        <Image 
                          src={profileImages[suggestion.id]} 
                          roundedCircle 
                          width={40}
                          height={40}
                          className="object-fit-cover"
                          alt={suggestion.name}
                        />
                        {suggestion.online && (
                          <Badge 
                            bg="success" 
                            className="position-absolute bottom-0 end-0 p-1 border border-white rounded-circle"
                            style={{ transform: 'translate(25%, 25%)' }}
                          />
                        )}
                      </>
                    ) : (
                      <div 
                        className="rounded-circle bg-light d-flex justify-content-center align-items-center" 
                        style={{ width: '40px', height: '40px' }}
                      >
                        {suggestion.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h6 className="mb-0">{suggestion.name}</h6>
                    <small className="text-muted">
                      {suggestion.mutualFriends} mutual friends
                    </small>
                  </div>
                </div>
                <Button 
                  variant={suggestion.isAdded ? "outline-success" : "outline-primary"} 
                  size="sm"
                  onClick={() => handleAddFriend(suggestion.id)}
                  disabled={suggestion.isAdded}
                  className="d-flex align-items-center"
                >
                  {suggestion.isAdded ? (
                    <>
                      <Check2 size={14} className="me-1" />
                      <span className="d-none d-sm-inline">Added</span>
                    </>
                  ) : (
                    <>
                      <PersonPlus size={14} className="me-1" />
                      <span className="d-none d-sm-inline">Add Friend</span>
                    </>
                  )}
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default FriendPage;