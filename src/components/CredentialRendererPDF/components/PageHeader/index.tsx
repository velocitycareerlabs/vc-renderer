import * as React from 'react';
import { format } from 'date-fns';
import { View, Text, Image } from '@react-pdf/renderer';
import { style } from './style';

type PageHeaderProps = {
  applicantName: string;
  loggedInUser: string;
  logo: string;
};

const defaultApplicantName = 'A Velocity User';

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { applicantName, loggedInUser, logo } = props;
  return (
    <View fixed>
      <View style={style.containers}>
        <View style={style.textContainer}>
          <View style={style.textBox}>
            <Text style={style.text1}>Report Subject</Text>
            <Text style={style.text2}>{applicantName || defaultApplicantName}</Text>
          </View>
          <View style={style.textBox}>
            <Text style={style.text1}>Date Created</Text>
            <Text style={style.text2}>{`${format(new Date(), 'MMMM dd, yyyy')}`}</Text>
          </View>
          <View style={style.textBox}>
            <Text style={style.text1}>Printed By</Text>
            <Text style={style.text2}>{loggedInUser}</Text>
          </View>
        </View>
        <View style={style.imageContainer}>
          {logo && <Image style={style.vclLogo} src={logo} />}
        </View>
      </View>
    </View>
  );
};
