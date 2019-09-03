package pl.jaknauczycsieprogramowania.posts;

import lombok.*;
import pl.jaknauczycsieprogramowania.users.User;

import javax.persistence.*;

@Entity
@Table(name = "posts")
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @NonNull
    private User user;

    @NonNull
    private String body;
}
