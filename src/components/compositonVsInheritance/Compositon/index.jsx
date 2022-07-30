import Text from './Text'
import Emoji from './Emoji';
import Bracket from './Bracket';

const index = () => {
    return (
        <div>
            <Emoji>{
                ({ ad }) => <Bracket>
                    {({ brk }) => <Text ad={ad} brk={brk} />}
                </Bracket>

            }</Emoji>


        </div>
    )
}

export default index;
