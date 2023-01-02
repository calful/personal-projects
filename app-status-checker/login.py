import requests

# cal
# Set the URL of the login form and the URL to redirect to after login
login_url = 'https://pitneybowes.wd1.myworkdayjobs.com/en-US/PBCareers/login?redirect=%2Fen-US%2FPBCareers%2FuserHome'
redirect_url = 'https://pitneybowes.wd1.myworkdayjobs.com/en-US/PBCareers/userHome'

# Set the login credentials
data = {
    'Email Address': 'calebdouglasfuller@gmail.com',
    'Password': 'LehighSWE#23'
}

# Send the POST request to the login form
response = requests.post(login_url, data=data)

# Check if the login was successful by checking the response status code
# and the URL of the response
if response.status_code == 200 and response.url == redirect_url:
    print('Login successful!')
else:
    print('Login failed')