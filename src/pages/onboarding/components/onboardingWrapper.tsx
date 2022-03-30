import React from 'react';
import imgLogo from '../../../static/images/imperium_logo.png';
import { Colors } from 'shared/Constants';
import { Card, Container } from 'react-bootstrap';
import { DarkButton } from 'shared/CommonStyles';
import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  title?: string;
  cardTitle?: string;
  action?: { title: string; onClick: () => void, disabled?: boolean };
  secondaryAction?: { title: string; href: string; };
}

export const OnboardingWrapper: React.FC<IProps> = ({ title, children, cardTitle, action, secondaryAction }: IProps) => {

  return (
    <div style={{ backgroundColor: Colors.PRIMARY, minHeight: '100vh', paddingTop: 50 }}>
      <Container style={{ textAlign: 'center' }}>
        <img src={imgLogo} style={{ width: 100, marginBottom: 100 }} />
        {title != null &&
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: -50 }}>
            <p style={{ maxWidth: 350, width: '100%', color: 'white', fontSize: 24, fontWeight: 500 }}>{title}</p>
          </div>
        }
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ width: '100%', maxWidth: 400, padding: 20, }}>
            {cardTitle != null && <h3 style={{ marginBottom: 20 }}>{cardTitle}</h3>}
            {children}
            {action != null && <DarkButton onClick={action.onClick} disabled={!!action.disabled}>{action.title}</DarkButton>}
            {secondaryAction != null && <Link to={secondaryAction.href} style={{ color: Colors.PRIMARY, marginTop: 25, marginBottom: -5 }}>{secondaryAction.title}</Link>}
          </Card>
        </div>
      </Container>
    </div>
  )
}