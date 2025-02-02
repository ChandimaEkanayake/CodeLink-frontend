const fetchVersionData = () => {
    return new Promise((resolve) => {
      // Simulate a delay to mimic an HTTP call
      setTimeout(() => {
        const data = {
          project: "EcommercePlatform",
          branches: [
            {
              branch_id: "main",
              commits: [
                {
                  commit_id: "1234567890abcdef",
                  author: "John Doe",
                  message: "Initial project setup",
                  timestamp: "2023-10-01T12:00:00Z"
                },
                {
                  commit_id: "234567890abcdef1",
                  author: "Jane Smith",
                  message: "Add basic product model",
                  timestamp: "2023-10-02T14:30:00Z"
                },
                {
                  commit_id: "34567890abcdef12",
                  author: "John Doe",
                  message: "Add user authentication",
                  timestamp: "2023-10-03T09:15:00Z"
                },
                {
                  commit_id: "4567890abcdef123",
                  author: "Alice Johnson",
                  message: "Fix authentication bugs",
                  timestamp: "2023-10-04T16:45:00Z"
                }
              ]
            }
            ,
            {
              branch_id: "production",
              commits: [
                {
                  commit_id: "567890abcdef1234",
                  author: "John Doe",
                  message: "Prepare for production release",
                  timestamp: "2023-10-05T11:00:00Z"
                },
                {
                  commit_id: "67890abcdef12345",
                  author: "Alice Johnson",
                  message: "Fix production deployment script",
                  timestamp: "2023-10-06T13:20:00Z"
                },
                {
                  commit_id: "7890abcdef123456",
                  author: "Bob Brown",
                  message: "Optimize database queries",
                  timestamp: "2023-10-07T10:05:00Z"
                },
                {
                  commit_id: "890abcdef1234567",
                  author: "Charlie Davis",
                  message: "Add logging for production",
                  timestamp: "2023-10-08T15:50:00Z"
                }
              ]
            },
            {
              branch_id: "feature-dashboard",
              commits: [
                {
                  commit_id: "901abcdef12345678",
                  author: "Bob Brown",
                  message: "Add dashboard layout",
                  timestamp: "2023-10-09T11:00:00Z"
                },
                {
                  commit_id: "0123456789abcdef",
                  author: "Bob Brown",
                  message: "Integrate sales data into dashboard",
                  timestamp: "2023-10-10T13:20:00Z"
                },
                {
                  commit_id: "123456789abcdef0",
                  author: "Bob Brown",
                  message: "Add charts to dashboard",
                  timestamp: "2023-10-11T10:05:00Z"
                },
                {
                  commit_id: "23456789abcdef01",
                  author: "Bob Brown",
                  message: "Fix dashboard responsiveness",
                  timestamp: "2023-10-12T15:50:00Z"
                }
              ]
            },
            {
              branch_id: "feature-progressbar",
              commits: [
                {
                  commit_id: "3456789abcdef012",
                  author: "Charlie Davis",
                  message: "Implement progress bar component",
                  timestamp: "2023-10-13T10:05:00Z"
                },
                {
                  commit_id: "456789abcdef0123",
                  author: "Charlie Davis",
                  message: "Style progress bar",
                  timestamp: "2023-10-14T15:50:00Z"
                },
                {
                  commit_id: "56789abcdef01234",
                  author: "Charlie Davis",
                  message: "Add progress bar animations",
                  timestamp: "2023-10-15T10:05:00Z"
                },
                {
                  commit_id: "6789abcdef012345",
                  author: "Charlie Davis",
                  message: "Fix progress bar bugs",
                  timestamp: "2023-10-16T15:50:00Z"
                }
              ]
            },
            {
              branch_id: "feature-checkout",
              commits: [
                {
                  commit_id: "789abcdef0123456",
                  author: "David Evans",
                  message: "Add checkout page layout",
                  timestamp: "2023-10-17T10:05:00Z"
                },
                {
                  commit_id: "89abcdef01234567",
                  author: "David Evans",
                  message: "Integrate payment gateway",
                  timestamp: "2023-10-18T15:50:00Z"
                },
                {
                  commit_id: "9abcdef012345678",
                  author: "David Evans",
                  message: "Add order confirmation",
                  timestamp: "2023-10-19T10:05:00Z"
                },
                {
                  commit_id: "abcdef0123456789",
                  author: "David Evans",
                  message: "Fix checkout bugs",
                  timestamp: "2023-10-20T15:50:00Z"
                }
              ]
            },
            {
              branch_id: "feature-search",
              commits: [
                {
                  commit_id: "bcdef0123456789a",
                  author: "Eva Green",
                  message: "Add search functionality",
                  timestamp: "2023-10-21T10:05:00Z"
                },
                {
                  commit_id: "cdef0123456789ab",
                  author: "Eva Green",
                  message: "Optimize search algorithm",
                  timestamp: "2023-10-22T15:50:00Z"
                },
                {
                  commit_id: "def0123456789abc",
                  author: "Eva Green",
                  message: "Add filters to search",
                  timestamp: "2023-10-23T10:05:00Z"
                },
                {
                  commit_id: "ef0123456789abcd",
                  author: "Eva Green",
                  message: "Fix search performance issues",
                  timestamp: "2023-10-24T15:50:00Z"
                }
              ]
            }
          ]
        };
        resolve(data);
      }, 1000); // Simulate a 1-second delay
    });
  };
  
  export default fetchVersionData;