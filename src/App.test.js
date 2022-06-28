import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import * as axios from 'axios'
import App from './App'

jest.mock('axios')
const initialProfileDataMock = {
    login: 'octocat',
    id: 583231,
    node_id: 'MDQ6VXNlcjU4MzIzMQ==',
    avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
    name: 'The Octocat',
    company: '@github',
    blog: 'https://github.blog',
    location: 'San Francisco',
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    public_gists: 8,
    followers: 6208,
    following: 9,
    created_at: '2011-01-25T18:44:36Z',
    updated_at: '2022-03-22T14:07:15Z',
}
const searchDataMock = { ...initialProfileDataMock, login: 'someAmazingName' }

describe('getting and showing profile data', () => {
    test('initial state is loading, and initial data is loaded', async () => {
        // mocking the api call result with our mock
        axios.get.mockResolvedValue({ data: initialProfileDataMock })
        render(<App />)
        // initial state should be loading without any user data
        const loadingItem = screen.getByText(/loading\.\.\./i)
        let profileName = screen.queryByRole('link', { name: /octocat/i })
        expect(loadingItem).toBeInTheDocument()
        expect(profileName).not.toBeInTheDocument()
        await waitFor(() => {
            expect(loadingItem).not.toBeInTheDocument()
        })
        // after loading data it should show our mock data result
        profileName = screen.queryByRole('link', { name: /octocat/i })
        expect(profileName).toBeInTheDocument()
    })
    test('users can search for profile', async () => {
        axios.get.mockResolvedValue({ data: initialProfileDataMock })
        render(<App />)
        // initial state should be loading without any user data
        const loadingItem = screen.getByText(/loading\.\.\./i)
        await waitFor(() => {
            expect(loadingItem).not.toBeInTheDocument()
        })
        const initialProfileName = screen.queryByRole('link', {
            name: /octocat/i,
        })
        const searchTextBox = screen.getByRole('textbox')
        expect(initialProfileName).toBeInTheDocument()
        expect(searchTextBox).toBeInTheDocument()
        // mock the value to return new object
        axios.get.mockResolvedValue({ data: searchDataMock })

        // change the textbox value and click on search
        fireEvent.change(searchTextBox, {
            target: { value: 'someAmazingName' },
        })
        const searchButton = screen.getByRole('button', { name: /search/i })
        fireEvent.click(searchButton)

        await waitFor(() => {
            const searchResultProfileName = screen.getByRole('link', {
                name: /someAmazingName/i,
            })
            expect(searchResultProfileName).toBeInTheDocument()
        })
    })
})
