import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Pic from '../lib/';
import { spy } from 'sinon';

describe('Pic', function() {
  it('should render the first image in images', function() {
    const props = {
      alt: 'heart',
      images: [
        {
          width: 290,
          url: 'http://placehold.it/290?text=♥'
        },
        {
          width: 320,
          url: 'http://placehold.it/320?text=♥'
        }
      ]
    };

    const pic = mount(
      <Pic { ...props } />
    );

    expect(pic.containsMatchingElement(
      <img
        alt={props.alt}
        src={props.images[0].url} />
    )).to.equal(true);
  });

  it('should render the second image in images', function() {
    const props = {
      alt: 'heart',
      defaultIndex: 1,
      images: [
        {
          width: 290,
          url: 'http://placehold.it/290?text=♥'
        },
        {
          width: 320,
          url: 'http://placehold.it/320?text=♥'
        }
      ]
    };

    const pic = mount(
      <Pic { ...props } />
    );

    expect(pic.containsMatchingElement(
      <img
        alt={props.alt}
        src={props.images[1].url} />
    )).to.equal(true);
  });

  it('should render the last image in noscript', function() {
    const props = {
      alt: 'heart',
      images: [
        {
          width: 290,
          url: 'http://placehold.it/290?text=♥'
        },
        {
          width: 320,
          url: 'http://placehold.it/320?text=♥'
        }
      ]
    };

    const pic = render(
      <Pic { ...props } />
    );

    expect(pic.find('noscript img').length).to.equal(1);
    expect(pic.find('noscript img').attr('src')).to.equal(props.images[1].url);
  });

  it('should not render image if props are not passed', function() {

    const pic = shallow(
      <Pic />
    );

    expect(pic.find('img')).to.have.length(0);
  });

  it('should setResponsiveImage image once mounted', function() {
    const props = {
      images: [
        {
          width: 290,
          url: 'http://placehold.it/290?text=♥'
        },
        {
          width: 320,
          url: 'http://placehold.it/320?text=♥'
        }
      ]
    };

    spy(Pic.prototype, 'setResponsiveImage');
    mount(<Pic { ...props } />);

    expect(Pic.prototype.setResponsiveImage).to.have.property('callCount', 1);
  });
});
