import React from "react";
import InnerBanner from "../../component/innerBanner/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import { expert1 } from "../../assets/images/images";
import { Link } from "react-router-dom";
import "./Blog.scss";
import Input from "../../component/Input/Input";
import { ArrowRight, CalendarIcon, SearchIcon, UserIcon } from "../../assets/icons/icons";
import { Button2 } from "../../component/buttons/Buttons";

const Blog = () => {
  return (
    <>
      <InnerBanner heading="Blog" />

      <div className="blogPage py-5">
        <Container>
          <Row>
            <Col md="8">
              <div className="blogHeading">
                <h2>Welcome to the ShapeGuru Blog</h2>
                <p>
                  Stay on the top of announcementsand research , find media ,
                  assets and learn about our experts.
                </p>
              </div>

              <Row>
                <div className="col-md-12">
                  <div className="BlogItem BlogItem__big">
                    <figure>
                      <img src={expert1} alt="expert1" />
                    </figure>
                    <div className="BlogItem__text">
                      <h2>
                        <Link to="/SingleBlog">The Team Watcher</Link>
                      </h2>
                      <div className="blogpost">
                        <div className="blogpost__by">
                          <span>
                            <UserIcon />
                          </span>
                          Vishal Chaudhary
                        </div>

                        <div className="blogpost__date">
                          <span>
                            <CalendarIcon />
                          </span>
                          02 November, 2023
                        </div>
                      </div>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="BlogItem">
                    <figure>
                      <img src={expert1} alt="expert1" />
                    </figure>
                    <div className="BlogItem__text">
                      <h2>
                        <Link to="/SingleBlog">The Team Watcher</Link>
                      </h2>
                      <div className="blogpost">
                        <div className="blogpost__by">
                          <span>1</span>
                          Vishal Chaudhary
                        </div>

                        <div className="blogpost__date">
                          <span>1</span>
                          02 November, 2023
                        </div>
                      </div>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="BlogItem">
                    <figure>
                      <img src={expert1} alt="expert1" />
                    </figure>
                    <div className="BlogItem__text">
                      <h2>
                        <Link to="/SingleBlog">The Team Watcher</Link>
                      </h2>
                      <div className="blogpost">
                        <div className="blogpost__by">
                          <span>
                            <UserIcon />
                          </span>
                          Vishal Chaudhary
                        </div>

                        <div className="blogpost__date">
                          <span>
                            <CalendarIcon />
                          </span>
                          02 November, 2023
                        </div>
                      </div>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="BlogItem">
                    <figure>
                      <img src={expert1} alt="expert1" />
                    </figure>
                    <div className="BlogItem__text">
                      <h2>
                        <Link to="/SingleBlog">The Team Watcher</Link>
                      </h2>
                      <div className="blogpost">
                        <div className="blogpost__by">
                          <span>
                            <UserIcon />
                          </span>
                          Vishal Chaudhary
                        </div>

                        <div className="blogpost__date">
                          <span>
                            <CalendarIcon />
                          </span>
                          02 November, 2023
                        </div>
                      </div>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="BlogItem">
                    <figure>
                      <img src={expert1} alt="expert1" />
                    </figure>
                    <div className="BlogItem__text">
                      <h2>
                        <Link to="/SingleBlog">The Team Watcher</Link>
                      </h2>
                      <div className="blogpost">
                        <div className="blogpost__by">
                          <span>
                            <UserIcon />
                          </span>
                          Vishal Chaudhary
                        </div>

                        <div className="blogpost__date">
                          <span>
                            <CalendarIcon />
                          </span>
                          02 November, 2023
                        </div>
                      </div>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit totam cupiditate ipsam distinctio,
                        inventore doloremque consequatur aliquam. Vitae iure
                        earum quisquam ducimus iusto qui doloribus rem dolor
                        quibusdam ex! Quam.
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
            <Col md="4">
              <div className="blogRight">
                <div className="searchBlog mb-5">
                  <Input type="text" placeholder="search blog" />
                  <Button2
                   
                    icon={<SearchIcon />}
                   
                  />
                </div>

                <h2 className="bhead">Recent Blogs</h2>
                <Row>
                  <div className="col-md-12">
                    <div className="BlogItem ">
                      <figure>
                        <img src={expert1} alt="expert1" />
                      </figure>
                      <div className="BlogItem__text">
                        <h2>
                          <Link to="/SingleBlog">The Team Watcher</Link>
                        </h2>
                        <div className="blogpost">
                          <div className="blogpost__by">
                            <span>
                              <UserIcon />
                            </span>
                            Vishal Chaudhary
                          </div>

                          <div className="blogpost__date">
                            <span>
                              <CalendarIcon />
                            </span>
                            02 November, 2023
                          </div>
                        </div>

                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Reprehenderit totam cupiditate ipsam distinctio,
                          inventore doloremque consequatur aliquam. Vitae iure
                          earum quisquam ducimus iusto qui doloribus rem dolor
                          quibusdam ex! Quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="BlogItem ">
                      <figure>
                        <img src={expert1} alt="expert1" />
                      </figure>
                      <div className="BlogItem__text">
                        <h2>
                          <Link to="/SingleBlog">The Team Watcher</Link>
                        </h2>
                        <div className="blogpost">
                          <div className="blogpost__by">
                            <span>
                              <UserIcon />
                            </span>
                            Vishal Chaudhary
                          </div>

                          <div className="blogpost__date">
                            <span>
                              <CalendarIcon />
                            </span>
                            02 November, 2023
                          </div>
                        </div>

                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Reprehenderit totam cupiditate ipsam distinctio,
                          inventore doloremque consequatur aliquam. Vitae iure
                          earum quisquam ducimus iusto qui doloribus rem dolor
                          quibusdam ex! Quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="BlogItem ">
                      <figure>
                        <img src={expert1} alt="expert1" />
                      </figure>
                      <div className="BlogItem__text">
                        <h2>
                          <Link to="/SingleBlog">The Team Watcher</Link>
                        </h2>
                        <div className="blogpost">
                          <div className="blogpost__by">
                            <span>
                              <UserIcon />
                            </span>
                            Vishal Chaudhary
                          </div>

                          <div className="blogpost__date">
                            <span>
                              <CalendarIcon />
                            </span>
                            02 November, 2023
                          </div>
                        </div>

                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Reprehenderit totam cupiditate ipsam distinctio,
                          inventore doloremque consequatur aliquam. Vitae iure
                          earum quisquam ducimus iusto qui doloribus rem dolor
                          quibusdam ex! Quam.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="BlogItem">
                      <figure>
                        <img src={expert1} alt="expert1" />
                      </figure>
                      <div className="BlogItem__text">
                        <h2>
                          <Link to="/SingleBlog">The Team Watcher</Link>
                        </h2>
                        <div className="blogpost">
                          <div className="blogpost__by">
                            <span>
                              <UserIcon />
                            </span>
                            Vishal Chaudhary
                          </div>

                          <div className="blogpost__date">
                            <span>
                              <CalendarIcon />
                            </span>
                            02 November, 2023
                          </div>
                        </div>

                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Reprehenderit totam cupiditate ipsam distinctio,
                          inventore doloremque consequatur aliquam. Vitae iure
                          earum quisquam ducimus iusto qui doloribus rem dolor
                          quibusdam ex! Quam.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="BlogItem">
                      <figure>
                        <img src={expert1} alt="expert1" />
                      </figure>
                      <div className="BlogItem__text">
                        <h2>
                          <Link to="/SingleBlog">The Team Watcher</Link>
                        </h2>
                        <div className="blogpost">
                          <div className="blogpost__by">
                            <span>
                              <UserIcon />
                            </span>
                            Vishal Chaudhary
                          </div>

                          <div className="blogpost__date">
                            <span>
                              <CalendarIcon />
                            </span>
                            02 November, 2023
                          </div>
                        </div>

                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Reprehenderit totam cupiditate ipsam distinctio,
                          inventore doloremque consequatur aliquam. Vitae iure
                          earum quisquam ducimus iusto qui doloribus rem dolor
                          quibusdam ex! Quam.
                        </p>
                      </div>
                    </div>
                  </div>

                  
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blog;
