import {render} from '@testing-library/react'
import Stepper from '../Stepper'

describe ('Stepeer', () => {
    it('should render correctly', () => {
        const {container} = render(<Stepper />)
        expect(container).toMatchSnapshot()
    })
    }
)

