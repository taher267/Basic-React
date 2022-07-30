import Text from './Text'
import Emoji from './Emoji';
import Bracket from './Bracket';
import Angle from './Angle';

const index = () => {
    return (
        <div>
            <Emoji>{
                ({ ad }) => <Bracket>
                    {({ brk }) => <Angle>
                        {({ ang }) => <Text ad={ad} brk={brk} ang={ang} />}
                    </Angle>}
                </Bracket>

            }</Emoji>


        </div>
    )
}

export default index;
